/*import {Input as Input} from "./Input";
import {ListView as ListView} from "./ListView";
import {Button as Button} from "./button";*/
/*import * as Input from "./Input";
import * as ListView from "./ListView";
import * as Button from "./Button";*/
var App = /** @class */ (function () {
    function App() {
    }
    App.prototype.run = function () {
        var _this = this;
        this.listView = new ListView(document.querySelector("ul"));
        this.input = new Input(document.querySelector("input"));
        this.button = new Button(document.querySelector("button"));
        this.button.click(function () {
            var str = _this.input.getValue();
            _this.listView.add(str);
        });
    };
    return App;
}());
var app = new App();
app.run();
//# sourceMappingURL=main.js.map