
/*import {Input as Input} from "./Input";
import {ListView as ListView} from "./ListView";
import {Button as Button} from "./button";*/
/*import * as Input from "./Input";
import * as ListView from "./ListView";
import * as Button from "./Button";*/

class App {
    listView;
    button;
    input;

    run(){
        this.listView = new ListView(document.querySelector("ul"));

        this.input = new Input(document.querySelector("input"));

        this.button = new Button(document.querySelector("button"));
        this.button.click(()=>{
            const str = this.input.getValue();
            this.listView.add(str);
        });
    }
}

const app = new App();
app.run();