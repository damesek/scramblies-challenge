goog.loadModule(function(exports) {
  "use strict";
  goog.module("goog.i18n.RelativeDateTimeFormat");
  const LocaleFeature = goog.require("goog.i18n.LocaleFeature");
  const MessageFormat = goog.require("goog.i18n.MessageFormat");
  const asserts = goog.require("goog.asserts");
  const relativeDateTimeSymbols = goog.require("goog.i18n.relativeDateTimeSymbols");
  let RelativeDateTimeFormat = function(opt_numeric, opt_style, opt_relativeDateTimeSymbols) {
    this.nativeMode_ = false;
    if (!LocaleFeature.USE_ECMASCRIPT_I18N_RDTF) {
      asserts.assert(opt_relativeDateTimeSymbols || relativeDateTimeSymbols.getRelativeDateTimeSymbols(), "goog.i18n.RelativeDateTimeSymbols requires symbols ECMAScript mode");
      this.rdtfSymbols_ = !LocaleFeature.USE_ECMASCRIPT_I18N_RDTF ? opt_relativeDateTimeSymbols || relativeDateTimeSymbols.getRelativeDateTimeSymbols() : null;
    }
    if (!this.rdtfSymbols_) {
      this.nativeMode_ = true;
    }
    this.alwaysNumeric_ = true;
    if (opt_numeric) {
      asserts.assert(opt_numeric == RelativeDateTimeFormat.NumericOption.ALWAYS || opt_numeric == RelativeDateTimeFormat.NumericOption.AUTO, "Invalid opt_numeric value");
      if (opt_numeric == RelativeDateTimeFormat.NumericOption.ALWAYS) {
        this.alwaysNumeric_ = true;
      } else if (opt_numeric == RelativeDateTimeFormat.NumericOption.AUTO) {
        this.alwaysNumeric_ = false;
      }
    }
    this.style_ = RelativeDateTimeFormat.Style.LONG;
    if (opt_style) {
      asserts.assert(opt_style >= RelativeDateTimeFormat.Style.LONG && opt_style <= RelativeDateTimeFormat.Style.NARROW, "Style must be LONG, SHORT, or NARROW");
      this.style_ = opt_style;
    }
  };
  RelativeDateTimeFormat.NumericOption = {ALWAYS:"always", AUTO:"auto",};
  RelativeDateTimeFormat.Style = {LONG:0, SHORT:1, NARROW:2};
  RelativeDateTimeFormat.Unit = {YEAR:0, QUARTER:1, MONTH:2, WEEK:3, DAY:4, HOUR:5, MINUTE:6, SECOND:7};
  RelativeDateTimeFormat.prototype.format = function(quantity, relativeUnit) {
    asserts.assertNumber(quantity, "Quantity must be a number");
    asserts.assert(relativeUnit >= RelativeDateTimeFormat.Unit.YEAR && relativeUnit <= RelativeDateTimeFormat.Unit.SECOND, "Unit must be one of the supported values");
    if (LocaleFeature.USE_ECMASCRIPT_I18N_RDTF) {
      return this.formatNative_(quantity, relativeUnit, this.alwaysNumeric_);
    } else {
      return this.formatPolyfill_(quantity, relativeUnit, this.alwaysNumeric_);
    }
  };
  RelativeDateTimeFormat.prototype.formatPolyfill_ = function(quantity, relativeUnit, useNumeric) {
    const rdtfUnitPattern = this.getUnitStylePattern_(relativeUnit);
    if (!useNumeric && rdtfUnitPattern && rdtfUnitPattern.R && rdtfUnitPattern.R["" + quantity]) {
      return rdtfUnitPattern.R["" + quantity];
    } else {
      return this.formatNumericInternal_(quantity, rdtfUnitPattern);
    }
  };
  RelativeDateTimeFormat.prototype.formatNative_ = function(quantity, relativeUnit, useNumeric) {
    let options = {"numeric":useNumeric ? "always" : "auto",};
    switch(this.style_) {
      case RelativeDateTimeFormat.Style.NARROW:
        options["style"] = "narrow";
        break;
      case RelativeDateTimeFormat.Style.SHORT:
        options["style"] = "short";
        break;
      case RelativeDateTimeFormat.Style.LONG:
        options["style"] = "long";
      default:
        break;
    }
    const intl = goog.global.Intl;
    let intlFormatter;
    try {
      intlFormatter = new intl.RelativeTimeFormat(goog.LOCALE.replace(/_/g, "-"), options);
    } catch (err) {
      return "";
    }
    let unit = "year";
    switch(relativeUnit) {
      case RelativeDateTimeFormat.Unit.YEAR:
        unit = "year";
        break;
      case RelativeDateTimeFormat.Unit.QUARTER:
        unit = "quarter";
        break;
      case RelativeDateTimeFormat.Unit.MONTH:
        unit = "month";
        break;
      case RelativeDateTimeFormat.Unit.WEEK:
        unit = "week";
        break;
      case RelativeDateTimeFormat.Unit.DAY:
        unit = "day";
        break;
      case RelativeDateTimeFormat.Unit.HOUR:
        unit = "hour";
        break;
      case RelativeDateTimeFormat.Unit.MINUTE:
        unit = "minute";
        break;
      case RelativeDateTimeFormat.Unit.SECOND:
        unit = "second";
        break;
    }
    return intlFormatter.format(quantity, unit);
  };
  RelativeDateTimeFormat.prototype.formatNumericInternal_ = function(quantity, unitStylePattern) {
    if (!unitStylePattern) {
      return "";
    }
    let relTimeString;
    const absQuantity = Math.abs(quantity);
    if (quantity > 0 || quantity == 0 && 1 / quantity == Infinity) {
      relTimeString = unitStylePattern.F;
    } else {
      relTimeString = unitStylePattern.P;
    }
    const msgFormatter = new MessageFormat("{N,plural," + relTimeString + "}");
    return msgFormatter.format({"N":absQuantity});
  };
  RelativeDateTimeFormat.prototype.getUnitStylePattern_ = function(relativeUnit) {
    const unitInfo = this.getUnitPattern_(relativeUnit);
    asserts.assertObject(unitInfo);
    return this.getStylePattern_(unitInfo);
  };
  RelativeDateTimeFormat.prototype.getStylePattern_ = function(unit) {
    switch(this.style_) {
      case RelativeDateTimeFormat.Style.NARROW:
        if (unit.NARROW != undefined) {
          return unit.NARROW;
        }
      case RelativeDateTimeFormat.Style.SHORT:
        if (unit.SHORT != undefined) {
          return unit.SHORT;
        }
      case RelativeDateTimeFormat.Style.LONG:
      default:
        return unit.LONG;
    }
  };
  RelativeDateTimeFormat.prototype.getFormatStyle = function() {
    return this.style_;
  };
  RelativeDateTimeFormat.prototype.getNumericMode = function() {
    if (this.alwaysNumeric_) {
      return RelativeDateTimeFormat.NumericOption.ALWAYS;
    } else {
      return RelativeDateTimeFormat.NumericOption.AUTO;
    }
  };
  RelativeDateTimeFormat.prototype.getUnitPattern_ = function(unit) {
    switch(unit) {
      default:
      case RelativeDateTimeFormat.Unit.YEAR:
        return this.rdtfSymbols_.YEAR;
      case RelativeDateTimeFormat.Unit.QUARTER:
        return this.rdtfSymbols_.QUARTER;
      case RelativeDateTimeFormat.Unit.MONTH:
        return this.rdtfSymbols_.MONTH;
      case RelativeDateTimeFormat.Unit.WEEK:
        return this.rdtfSymbols_.WEEK;
      case RelativeDateTimeFormat.Unit.DAY:
        return this.rdtfSymbols_.DAY;
      case RelativeDateTimeFormat.Unit.HOUR:
        return this.rdtfSymbols_.HOUR;
      case RelativeDateTimeFormat.Unit.MINUTE:
        return this.rdtfSymbols_.MINUTE;
      case RelativeDateTimeFormat.Unit.SECOND:
        return this.rdtfSymbols_.SECOND;
    }
  };
  RelativeDateTimeFormat.prototype.isOffsetDefinedForUnit = function(unit, offset) {
    if (this.rdtfSymbols_ == undefined) {
      return undefined;
    }
    const rdtfUnitPattern = this.getUnitStylePattern_(unit);
    if (typeof offset == "string") {
      offset = Number(offset);
    }
    if (rdtfUnitPattern && rdtfUnitPattern.R && rdtfUnitPattern.R["" + offset]) {
      return rdtfUnitPattern.R["" + offset];
    } else {
      return undefined;
    }
  };
  RelativeDateTimeFormat.prototype.isNativeMode = function() {
    return this.nativeMode_;
  };
  RelativeDateTimeFormat.prototype.hasNativeRdtf = function() {
    const intl = goog.global.Intl;
    return Boolean(intl && intl.RelativeTimeFormat);
  };
  exports = RelativeDateTimeFormat;
  return exports;
});

//# sourceMappingURL=goog.i18n.relativedatetimeformat.js.map
