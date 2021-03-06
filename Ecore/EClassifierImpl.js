/* CrossEcore is a cross-platform modeling framework that generates C#, TypeScript,
 * JavaScript, Swift code from Ecore models with embedded OCL (http://www.crossecore.org/).
 * The original Eclipse Modeling Framework is available at https://www.eclipse.org/modeling/emf/.
 *
 * contributor: Simon Schwichtenberg
 */
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
define(["require", "exports", "ecore/EClassifierBase"], function (require, exports, EClassifierBase_1) {
    "use strict";
    Object.defineProperty(exports, "__esModule", { value: true });
    ///<summary>This class was generated.</summary>
    var EClassifierImpl = (function (_super) {
        __extends(EClassifierImpl, _super);
        function EClassifierImpl() {
            //implement your generated class here
            var _this = _super !== null && _super.apply(this, arguments) || this;
            _this.metaObjectID = -1;
            _this.setClassifierID = function (id) {
                _this.metaObjectID = id;
            };
            _this.setGeneratedInstanceClass = function (isGenerated) {
                if (isGenerated) {
                    if (_this.generatedInstanceClassName == null) {
                        _this.generatedInstanceClassName = _this.instanceClassName;
                        _this.instanceClassName = null;
                    }
                }
                else if (_this.generatedInstanceClassName != null) {
                    _this.instanceClassName = _this.generatedInstanceClassName;
                    _this.generatedInstanceClassName = null;
                }
            };
            _this.basicSetInstanceTypeName = function (newInstanceTypeName) {
                var oldInstanceTypeName = _this.instanceTypeName;
                _this.instanceTypeName = newInstanceTypeName;
                /*
                 if (eNotificationRequired())
                 {
                 eNotify
                 (new ENotificationImpl(this, Notification.SET, EcorePackage.ECLASSIFIER__INSTANCE_TYPE_NAME, oldInstanceTypeName, newInstanceTypeName));
                 }
                 */
            };
            return _this;
        }
        return EClassifierImpl;
    }(EClassifierBase_1.EClassifierBase));
    exports.EClassifierImpl = EClassifierImpl;
});
