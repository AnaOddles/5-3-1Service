"use strict";

var _interopRequireDefault = require("@babel/runtime/helpers/interopRequireDefault");

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.Auxiliary = void 0;

var _classCallCheck2 = _interopRequireDefault(require("@babel/runtime/helpers/classCallCheck"));

var _createClass2 = _interopRequireDefault(require("@babel/runtime/helpers/createClass"));

var _defineProperty2 = _interopRequireDefault(require("@babel/runtime/helpers/defineProperty"));

var Auxiliary = /*#__PURE__*/function () {
  //Private properties - name:type
  //Constructor
  function Auxiliary(id, name, userId, liftType, description) {
    (0, _classCallCheck2.default)(this, Auxiliary);
    (0, _defineProperty2.default)(this, "id", -1);
    (0, _defineProperty2.default)(this, "name", "");
    (0, _defineProperty2.default)(this, "userId", -1);
    (0, _defineProperty2.default)(this, "liftType", "");
    (0, _defineProperty2.default)(this, "description", "");
    this.id = id;
    this.name = name;
    this.userId = userId;
    this.liftType = liftType;
    this.description = description;
  } //Getter & setters 


  (0, _createClass2.default)(Auxiliary, [{
    key: "Id",
    get: function get() {
      return this.id;
    },
    set: function set(id) {
      this.id = id;
    }
  }, {
    key: "UserId",
    get: function get() {
      return this.userId;
    },
    set: function set(userId) {
      this.userId = userId;
    }
  }, {
    key: "LiftType",
    get: function get() {
      return this.liftType;
    },
    set: function set(liftType) {
      this.liftType = liftType;
    }
  }, {
    key: "Description",
    get: function get() {
      return this.description;
    },
    set: function set(description) {
      this.description = description;
    }
  }, {
    key: "Name",
    get: function get() {
      return this.name;
    },
    set: function set(name) {
      this.name = name;
    }
  }]);
  return Auxiliary;
}();

exports.Auxiliary = Auxiliary;
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi4uLy4uLy4uL2FwcC9tb2RlbHMvQXV4aWxpYXJ5LnRzIl0sIm5hbWVzIjpbIkF1eGlsaWFyeSIsImlkIiwibmFtZSIsInVzZXJJZCIsImxpZnRUeXBlIiwiZGVzY3JpcHRpb24iXSwibWFwcGluZ3MiOiI7Ozs7Ozs7Ozs7Ozs7OztJQUFhQSxTO0FBRVQ7QUFPQTtBQUNBLHFCQUFZQyxFQUFaLEVBQXVCQyxJQUF2QixFQUFvQ0MsTUFBcEMsRUFBbURDLFFBQW5ELEVBQXFFQyxXQUFyRSxFQUNBO0FBQUE7QUFBQSw4Q0FScUIsQ0FBQyxDQVF0QjtBQUFBLGdEQVB1QixFQU92QjtBQUFBLGtEQU55QixDQUFDLENBTTFCO0FBQUEsb0RBTDJCLEVBSzNCO0FBQUEsdURBSjhCLEVBSTlCO0FBQ0ksU0FBS0osRUFBTCxHQUFVQSxFQUFWO0FBQ0EsU0FBS0MsSUFBTCxHQUFZQSxJQUFaO0FBQ0EsU0FBS0MsTUFBTCxHQUFjQSxNQUFkO0FBQ0EsU0FBS0MsUUFBTCxHQUFnQkEsUUFBaEI7QUFDQSxTQUFLQyxXQUFMLEdBQW1CQSxXQUFuQjtBQUNILEcsQ0FFRDs7Ozs7U0FDQSxlQUNBO0FBQ0ksYUFBTyxLQUFLSixFQUFaO0FBQ0gsSztTQUNELGFBQU9BLEVBQVAsRUFDQTtBQUNJLFdBQUtBLEVBQUwsR0FBVUEsRUFBVjtBQUNIOzs7U0FFRCxlQUNBO0FBQ0ksYUFBTyxLQUFLRSxNQUFaO0FBQ0gsSztTQUNELGFBQVdBLE1BQVgsRUFDQTtBQUNJLFdBQUtBLE1BQUwsR0FBY0EsTUFBZDtBQUNIOzs7U0FFRCxlQUNBO0FBQ0ksYUFBTyxLQUFLQyxRQUFaO0FBQ0gsSztTQUNELGFBQWFBLFFBQWIsRUFDQTtBQUNJLFdBQUtBLFFBQUwsR0FBZ0JBLFFBQWhCO0FBQ0g7OztTQUVELGVBQ0E7QUFDSSxhQUFPLEtBQUtDLFdBQVo7QUFDSCxLO1NBQ0QsYUFBZ0JBLFdBQWhCLEVBQ0E7QUFDSSxXQUFLQSxXQUFMLEdBQW1CQSxXQUFuQjtBQUNIOzs7U0FFRCxlQUNBO0FBQ0ksYUFBTyxLQUFLSCxJQUFaO0FBQ0gsSztTQUNELGFBQVNBLElBQVQsRUFDQTtBQUNJLFdBQUtBLElBQUwsR0FBWUEsSUFBWjtBQUNIIiwic291cmNlc0NvbnRlbnQiOlsiZXhwb3J0IGNsYXNzIEF1eGlsaWFyeVxue1xuICAgIC8vUHJpdmF0ZSBwcm9wZXJ0aWVzIC0gbmFtZTp0eXBlXG4gICAgcHJpdmF0ZSBpZDogbnVtYmVyID0gLTE7XG4gICAgcHJpdmF0ZSBuYW1lOiBzdHJpbmcgPSBcIlwiO1xuICAgIHByaXZhdGUgdXNlcklkOiBudW1iZXIgPSAtMTtcbiAgICBwcml2YXRlIGxpZnRUeXBlOiBzdHJpbmcgPSBcIlwiO1xuICAgIHByaXZhdGUgZGVzY3JpcHRpb246IHN0cmluZyA9IFwiXCI7XG5cbiAgICAvL0NvbnN0cnVjdG9yXG4gICAgY29uc3RydWN0b3IoaWQ6bnVtYmVyLCBuYW1lOnN0cmluZywgdXNlcklkOm51bWJlciwgbGlmdFR5cGU6IHN0cmluZywgZGVzY3JpcHRpb246c3RyaW5nKVxuICAgIHtcbiAgICAgICAgdGhpcy5pZCA9IGlkO1xuICAgICAgICB0aGlzLm5hbWUgPSBuYW1lO1xuICAgICAgICB0aGlzLnVzZXJJZCA9IHVzZXJJZDsgXG4gICAgICAgIHRoaXMubGlmdFR5cGUgPSBsaWZ0VHlwZTtcbiAgICAgICAgdGhpcy5kZXNjcmlwdGlvbiA9IGRlc2NyaXB0aW9uO1xuICAgIH1cblxuICAgIC8vR2V0dGVyICYgc2V0dGVycyBcbiAgICBnZXQgSWQoKTpudW1iZXJcbiAgICB7XG4gICAgICAgIHJldHVybiB0aGlzLmlkO1xuICAgIH1cbiAgICBzZXQgSWQoaWQ6bnVtYmVyKVxuICAgIHtcbiAgICAgICAgdGhpcy5pZCA9IGlkOyBcbiAgICB9XG5cbiAgICBnZXQgVXNlcklkKCk6bnVtYmVyXG4gICAge1xuICAgICAgICByZXR1cm4gdGhpcy51c2VySWQ7XG4gICAgfVxuICAgIHNldCBVc2VySWQodXNlcklkOm51bWJlcilcbiAgICB7XG4gICAgICAgIHRoaXMudXNlcklkID0gdXNlcklkOyBcbiAgICB9XG5cbiAgICBnZXQgTGlmdFR5cGUoKTpzdHJpbmdcbiAgICB7XG4gICAgICAgIHJldHVybiB0aGlzLmxpZnRUeXBlO1xuICAgIH1cbiAgICBzZXQgTGlmdFR5cGUobGlmdFR5cGU6c3RyaW5nKVxuICAgIHtcbiAgICAgICAgdGhpcy5saWZ0VHlwZSA9IGxpZnRUeXBlOyBcbiAgICB9XG5cbiAgICBnZXQgRGVzY3JpcHRpb24oKTpzdHJpbmdcbiAgICB7XG4gICAgICAgIHJldHVybiB0aGlzLmRlc2NyaXB0aW9uO1xuICAgIH1cbiAgICBzZXQgRGVzY3JpcHRpb24oZGVzY3JpcHRpb246c3RyaW5nKVxuICAgIHtcbiAgICAgICAgdGhpcy5kZXNjcmlwdGlvbiA9IGRlc2NyaXB0aW9uOyBcbiAgICB9XG4gICAgXG4gICAgZ2V0IE5hbWUoKTpzdHJpbmdcbiAgICB7XG4gICAgICAgIHJldHVybiB0aGlzLm5hbWU7XG4gICAgfVxuICAgIHNldCBOYW1lKG5hbWU6c3RyaW5nKVxuICAgIHtcbiAgICAgICAgdGhpcy5uYW1lID0gbmFtZTtcbiAgICB9XG5cblxuXG5cbn0iXX0=