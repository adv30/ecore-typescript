var __extends = (this && this.__extends) || (function () {
    var extendStatics = Object.setPrototypeOf ||
        ({ __proto__: [] } instanceof Array && function (d, b) { d.__proto__ = b; }) ||
        function (d, b) { for (var p in b) if (b.hasOwnProperty(p)) d[p] = b[p]; };
    return function (d, b) {
        extendStatics(d, b);
        function __() { this.constructor = d; }
        d.prototype = b === null ? Object.create(b) : (__.prototype = b.prototype, new __());
    };
})();
define(["require", "exports", "ecore/EModelElementImpl", "ecore/EcorePackageLiterals"], function (require, exports, EModelElementImpl_1, EcorePackageLiterals_1) {
    "use strict";
    Object.defineProperty(exports, "__esModule", { value: true });
    /* CrossEcore is a cross-platform modeling framework that generates C#, TypeScript,
     * JavaScript, Swift code from Ecore models with embedded OCL (http://www.crossecore.org/).
     * The original Eclipse Modeling Framework is available at https://www.eclipse.org/modeling/emf/.
     *
     * contributor: Simon Schwichtenberg
     */
    ///<summary>This class was generated.</summary>
    var ENamedElementBase = (function (_super) {
        __extends(ENamedElementBase, _super);
        function ENamedElementBase() {
            var _this = _super !== null && _super.apply(this, arguments) || this;
            _this._name = "";
            return _this;
            //public eGetFromENamedElement = this.eGet;
        }
        Object.defineProperty(ENamedElementBase.prototype, "name", {
            get: function () {
                return this._name;
            },
            set: function (value) {
                this._name = value;
            },
            enumerable: true,
            configurable: true
        });
        ENamedElementBase.prototype.getEAnnotation = function (source) {
            /*TODO implement function*/
            return null;
        };
        ;
        ENamedElementBase.prototype.eStaticClass = function () {
            //return EcorePackageLiterals.ENAMEDELEMENT;
            return null;
        };
        ENamedElementBase.prototype.eGet = function (featureID, resolve, coreType) {
            switch (featureID) {
                case EcorePackageLiterals_1.EcorePackageLiterals.ENAMEDELEMENT_EANNOTATIONS:
                    return this.eAnnotations;
                case EcorePackageLiterals_1.EcorePackageLiterals.ENAMEDELEMENT_NAME:
                    return this.name;
            }
            //return this.eGetFromEModelElement(featureID, resolve, coreType);
            return _super.prototype.eGet.call(this, featureID, resolve, coreType);
        };
        return ENamedElementBase;
    }(EModelElementImpl_1.EModelElementImpl));
    exports.ENamedElementBase = ENamedElementBase;
});
