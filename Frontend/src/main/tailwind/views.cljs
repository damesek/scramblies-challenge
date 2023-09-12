(ns tailwind.views
  (:require [re-frame.core :as rf]
            [reagent.core :as r]
            [tailwind.events]
            [tailwind.subs]
            [tailwind.db :as db]))

(defn scramble-form [success error field-atoms]
  (let [rearrangable? (str (-> @success :body :scramble))]

  [:div.px-6.pb-24.pt-20.sm:pb-32.lg:px-8.lg:py-48
   [:div.mx-auto.max-w-xl.lg:mr-0.lg:max-w-lg
    [:p.mb-5.text-gray-400.font-light "We don't filter out the not allowed chars in the text. Test reasons."]
    [:div.grid.grid-cols-1.gap-x-8.gap-y-6.sm:grid-cols-2

     [:div
      [:label.block.text-sm.font-semibold.leading-6.text-gray-900 {:for "first-name"} "str1"]
      [:div.mt-2.5
       [:input#first-name.block.w-full.rounded-md.border-0.px-3.5.py-2.text-gray-900.shadow-sm.ring-1.ring-inset.ring-gray-300.placeholder:text-gray-400.focus:ring-2.focus:ring-inset.focus:ring-indigo-600.sm:text-sm.sm:leading-6
        {:type "text"
         :name "str1"
         :on-change #(swap! field-atoms assoc
                            :str1 (-> % .-target .-value))
         :value (:str1 @field-atoms)}]]]

     [:div
      [:label.block.text-sm.font-semibold.leading-6.text-gray-900 {:for "last-name"} "str2"]
      [:div.mt-2.5
       [:input#last-name.block.w-full.rounded-md.border-0.px-3.5.py-2.text-gray-900.shadow-sm.ring-1.ring-inset.ring-gray-300.placeholder:text-gray-400.focus:ring-2.focus:ring-inset.focus:ring-indigo-600.sm:text-sm.sm:leading-6
        {:type "text"
         :name "str2"
         :on-change #(swap! field-atoms assoc
                            :str2 (-> % .-target .-value))
         :value (:str2 @field-atoms)}]]]]

    [:div.mt-8.flex.justify-end
     [:button.rounded-md.bg-blue-400.px-3.5.py-2.5.text-center.text-md.font-light.text-white.shadow-sm.hover:bg-blue-500.focus-visible:outline.focus-visible:outline-2.focus-visible:outline-offset-2.focus-visible:outline-blue-600
      {:type     "submit"
       :on-click (fn [e]
                   (rf/dispatch [:possible-rearrange? (:str1 @field-atoms)
                                                      (:str2 @field-atoms)])
                   (reset! field-atoms {:str1 "" :str2 ""}))}
      "rearrangable?"]]]

   [:div.mt-5.p-7.shadow-md
    (when-not (nil? @success) [:p.px-2 (if (= "true" rearrangable?)
                                         {:class "text-green-500 bg-green-100"}
                                         {:class "text-gray-700 bg-gray-100"})
                                         "Request Successful? " (str (-> @success :status))
                                          " Rearrangable? " rearrangable?])
    (when-not (nil? @error) [:p.px-2 {:class "text-red-500 bg-red-100"} "Not allowed chars? "
                             (str "Yes: "(-> @error :debug-message))])]]))


(defn public []
  (let [success (rf/subscribe [:success-response])
        error (rf/subscribe [:error-response])
        field-atoms (r/atom {:str1 "" :str2 ""})]
    (fn []
      [:div.relative.isolate.bg-white.m-3
       [:div.mx-auto.grid.max-w-7xl.grid-cols-1.lg:grid-cols-2
        [:div.relative.px-6.pb-20.pt-24.sm:pt-32.lg:static.lg:px-8.lg:py-48
         [:div.mx-auto.max-w-xl.lg:mx-0.lg:max-w-lg
          [:div.absolute.inset-y-0.left-0.-z-10.w-full.overflow-hidden.bg-gray-100.ring-1.rounded-xl.shadow-md {:class "ring-gray-900/10 lg:w-1/2"}
           [:svg.absolute.inset-0.h-full.w-full.stroke-gray-200 {:class "[mask-image:radial-gradient(100%_100%_at_top_right,white,transparent)]" :aria-hidden "true"}
            [:defs
             [:pattern#83fd4e5a-9d52-42fc-97b6-718e5d7ee527 {:width "200" :height "200" :x "100%" :y "-1" :patternUnits "userSpaceOnUse"}
              [:path {:d "M130 200V.5M.5 .5H200" :fill "none"}]]]
            [:rect {:width "100%" :height "100%" :stroke-width "0" :fill "white"}]
            [:svg.overflow-visible.fill-gray-50 {:x "100%" :y "-1"}
             [:path {:d "M-470.5 0h201v201h-201Z" :stroke-width "0"}]]
            [:rect {:width "100%" :height "100%" :stroke-width "0" :fill "url(#83fd4e5a-9d52-42fc-97b6-718e5d7ee527)"}]]]
          [:h2.text-3xl.font-bold.tracking-tight.text-gray-900 "Scramblies challenge"]
          [:p.mt-6.text-lg.leading-8.text-gray-600 "Complete the function (scramble str1 str2) that returns true if a portion of
                                                str1 characters can be rearranged to match str2, otherwise returns false"]
          [:dl.mt-10.space-y-4.text-base.leading-7.text-gray-600
           [:div.flex.gap-x-4
            [:dt.flex-none
             [:span.sr-only "Address"]
             [:svg.w-7.h-6 {:xmlns "http://www.w3.org/2000/svg" :fill "none" :viewBox "0 0 24 24" :stroke-width "1.5" :stroke "currentColor"}
              [:path {:stroke-linecap "round" :stroke-linejoin "round" :d "M4.5 12h15m0 0l-6.75-6.75M19.5 12l-6.75 6.75"}]]]
            [:dd "Only lower case letters will be used (a-z). "]]
           [:div.flex.gap-x-4
            [:dt.flex-none
             [:span.sr-only "Telephone"]
             [:svg.w-7.h-6 {:xmlns "http://www.w3.org/2000/svg" :fill "none" :viewBox "0 0 24 24" :stroke-width "1.5" :stroke "currentColor"}
              [:path {:stroke-linecap "round" :stroke-linejoin "round" :d "M4.5 12h15m0 0l-6.75-6.75M19.5 12l-6.75 6.75"}]]]
            [:dd "No punctuation or digits will be included."]]
           ]]]
        [scramble-form success error field-atoms]
        ]])))

