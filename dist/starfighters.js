var __extends = (this && this.__extends) || function (d, b) {
    for (var p in b) if (b.hasOwnProperty(p)) d[p] = b[p];
    function __() { this.constructor = d; }
    d.prototype = b === null ? Object.create(b) : (__.prototype = b.prototype, new __());
};
var base_ships_1 = require('./base-ships');
var MillennimFalcon = (function (_super) {
    __extends(MillennimFalcon, _super);
    function MillennimFalcon() {
        _super.call(this, 'hyperdrive');
        this.cargoContainers = 2;
    }
    MillennimFalcon.prototype.jumpIntoHyperspace = function () {
        if (Math.random() >= 0.5) {
            _super.prototype.jumpIntoHyperspace.call(this);
        }
        else {
            console.log('Faled to jump into hyperspace');
        }
    };
    return MillennimFalcon;
})(base_ships_1.Spacecraft);
exports.MillennimFalcon = MillennimFalcon;
