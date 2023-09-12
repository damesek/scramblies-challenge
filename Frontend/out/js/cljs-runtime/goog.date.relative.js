goog.provide("goog.date.relative");
goog.provide("goog.date.relative.TimeDeltaFormatter");
goog.provide("goog.date.relative.Unit");
goog.require("goog.i18n.DateTimeFormat");
goog.require("goog.i18n.DateTimePatterns");
goog.require("goog.i18n.RelativeDateTimeFormat");
goog.requireType("goog.date.DateTime");
goog.scope(function() {
  var RelativeDateTimeFormat = goog.module.get("goog.i18n.RelativeDateTimeFormat");
  goog.date.relative.MINUTE_MS_ = 60000;
  goog.date.relative.DAY_MS_ = 86400000;
  goog.date.relative.FORTNIGHT_ = 14;
  goog.date.relative.SURROGATE_LOW_ = 55296;
  goog.date.relative.SURROGATE_HIGH_ = 57343;
  goog.date.relative.Unit = {MINUTES:0, HOURS:1, DAYS:2};
  goog.date.relative.fullDateFormatter_;
  goog.date.relative.shortTimeFormatter_;
  goog.date.relative.monthDateFormatter_;
  goog.date.relative.casingMode_ = true;
  goog.date.relative.formatTimeDelta_;
  goog.date.relative.TimeDeltaFormatter;
  goog.date.relative.setTimeDeltaFormatter = function(formatter) {
    goog.date.relative.formatTimeDelta_ = formatter;
  };
  goog.date.relative.setCasingMode = function(capitalizeMode) {
    goog.date.relative.casingMode_ = capitalizeMode;
  };
  goog.date.relative.upcase = function(text) {
    var codepointLength = 1;
    var codePoint0 = text.charCodeAt(0);
    if (codePoint0 >= goog.date.relative.SURROGATE_LOW_ && codePoint0 <= goog.date.relative.SURROGATE_HIGH_) {
      codepointLength = 2;
    }
    text = text.substring(0, codepointLength).toLocaleUpperCase() + text.substring(codepointLength);
    return text;
  };
  goog.date.relative.relativeCasedString_ = function(dayOffset) {
    var rdtf_formatter = new RelativeDateTimeFormat(RelativeDateTimeFormat.NumericOption.AUTO);
    var result = rdtf_formatter.format(dayOffset, RelativeDateTimeFormat.Unit.DAY);
    if (!result || result.match(/[0-9\u0660-\u0669\u06f0-\u06f9]/g)) {
      return null;
    }
    if (goog.date.relative.casingMode_) {
      return goog.date.relative.upcase(result);
    }
    return result;
  };
  goog.date.relative.formatMonth_ = function(date) {
    if (!goog.date.relative.monthDateFormatter_) {
      goog.date.relative.monthDateFormatter_ = new goog.i18n.DateTimeFormat(goog.i18n.DateTimePatterns.MONTH_DAY_ABBR);
    }
    return goog.date.relative.monthDateFormatter_.format(date);
  };
  goog.date.relative.formatShortTime_ = function(date) {
    if (!goog.date.relative.shortTimeFormatter_) {
      goog.date.relative.shortTimeFormatter_ = new goog.i18n.DateTimeFormat(goog.i18n.DateTimeFormat.Format.SHORT_TIME);
    }
    return goog.date.relative.shortTimeFormatter_.format(date);
  };
  goog.date.relative.formatFullDate_ = function(date) {
    if (!goog.date.relative.fullDateFormatter_) {
      goog.date.relative.fullDateFormatter_ = new goog.i18n.DateTimeFormat(goog.i18n.DateTimeFormat.Format.FULL_DATE);
    }
    return goog.date.relative.fullDateFormatter_.format(date);
  };
  goog.date.relative.rdtformat_ = function(absQuantity, futureFlag, relUnit) {
    var quantity = futureFlag ? absQuantity : -absQuantity;
    var rdtfFormatter = new RelativeDateTimeFormat();
    var rdtfUnit;
    switch(relUnit) {
      case goog.date.relative.Unit.MINUTES:
        rdtfUnit = RelativeDateTimeFormat.Unit.MINUTE;
        break;
      case goog.date.relative.Unit.HOURS:
        rdtfUnit = RelativeDateTimeFormat.Unit.HOUR;
        break;
      default:
      case goog.date.relative.Unit.DAYS:
        rdtfUnit = RelativeDateTimeFormat.Unit.DAY;
        break;
    }
    return rdtfFormatter.format(quantity, rdtfUnit);
  };
  goog.date.relative.format = function(dateMs) {
    var now = goog.now();
    var delta = Math.floor((now - dateMs) / goog.date.relative.MINUTE_MS_);
    var future = false;
    if (delta < 0) {
      future = true;
      delta *= -1;
    }
    if (delta < 60) {
      return goog.date.relative.formatTimeDelta_(delta, future, goog.date.relative.Unit.MINUTES);
    } else {
      delta = Math.floor(delta / 60);
      if (delta < 24) {
        return goog.date.relative.formatTimeDelta_(delta, future, goog.date.relative.Unit.HOURS);
      } else {
        var midnight = new Date(goog.now());
        midnight.setHours(0);
        midnight.setMinutes(0);
        midnight.setSeconds(0);
        midnight.setMilliseconds(0);
        delta = Math.ceil((midnight.getTime() - dateMs) / goog.date.relative.DAY_MS_);
        if (future) {
          delta *= -1;
        }
        if (delta < goog.date.relative.FORTNIGHT_) {
          return goog.date.relative.formatTimeDelta_(delta, future, goog.date.relative.Unit.DAYS);
        } else {
          return "";
        }
      }
    }
  };
  goog.date.relative.formatPast = function(dateMs) {
    var now = goog.now();
    if (now < dateMs) {
      dateMs = now;
    }
    return goog.date.relative.format(dateMs);
  };
  goog.date.relative.formatDay = function(dateMs, opt_formatter) {
    var today = new Date(goog.now());
    today.setHours(0);
    today.setMinutes(0);
    today.setSeconds(0);
    today.setMilliseconds(0);
    var dayOffset = (dateMs - today.getTime()) / goog.date.relative.DAY_MS_;
    dayOffset = Math.floor(dayOffset);
    var relativeResult = goog.date.relative.relativeCasedString_(dayOffset);
    if (relativeResult) {
      return relativeResult;
    }
    var formatFunction = opt_formatter || goog.date.relative.formatMonth_;
    return formatFunction(new Date(dateMs));
  };
  goog.date.relative.getDateString = function(date, opt_shortTimeMsg, opt_fullDateMsg) {
    return goog.date.relative.getDateString_(date, goog.date.relative.format, opt_shortTimeMsg, opt_fullDateMsg);
  };
  goog.date.relative.getPastDateString = function(date, opt_shortTimeMsg, opt_fullDateMsg) {
    return goog.date.relative.getDateString_(date, goog.date.relative.formatPast, opt_shortTimeMsg, opt_fullDateMsg);
  };
  goog.date.relative.getDateString_ = function(date, relativeFormatter, opt_shortTimeMsg, opt_fullDateMsg) {
    var dateMs = date.getTime();
    var relativeDate = relativeFormatter(dateMs);
    if (relativeDate) {
      relativeDate = " (" + relativeDate + ")";
    }
    var delta = Math.floor((goog.now() - dateMs) / goog.date.relative.MINUTE_MS_);
    if (delta < 60 * 24) {
      return (opt_shortTimeMsg || goog.date.relative.formatShortTime_(date)) + relativeDate;
    } else {
      return (opt_fullDateMsg || goog.date.relative.formatFullDate_(date)) + relativeDate;
    }
  };
});
goog.date.relative.setTimeDeltaFormatter(goog.date.relative.rdtformat_);

//# sourceMappingURL=goog.date.relative.js.map
