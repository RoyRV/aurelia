﻿import { inject } from 'aurelia-framework';


export class About {
    constructor() {
    }

    configureRouter(config, router) {
        this.router = router;
        let routes = [
            { route: "", moduleId: "about/components/aboutIndex", nav: true, name: "index", title: "Index" },
            { route: "checkbox", moduleId: "about/components/aboutCheckbox", nav: true, name: "checkbox", title: "Checkbox" },
            { route: "datebox", moduleId: "about/components/aboutDatebox", nav: true, name: "datebox", title: "Datebox" },
            { route: "dropdown", moduleId: "about/components/aboutDropdown", nav: true, name: "dropdown", title: "Dropdown" },
            { route: "textbox", moduleId: "about/components/aboutTextbox", nav: true, name: "textbox", title: "Textbox" },
            { route: "radiobutton", moduleId: "about/components/aboutRadiobutton", nav: true, name: "radiobutton", title: "Radiobutton" },
            { route: "radiobuttonlist", moduleId: "about/components/aboutRadiobuttonList", nav: true, name: "radiobuttonlist", title: "RadiobuttonList" },
            { route: "picklist", moduleId: "about/components/aboutPicklist", nav: true, name: "picklist", title: "Picklist" },
            { route: "textArea", moduleId: "about/components/aboutTextArea", nav: true, name: "textArea", title: "TextArea" },
            { route: "maskedbox", moduleId: "about/components/aboutMaskedbox", nav: true, name: "maskedbox", title: "Maskedbox" },
            { route: "label", moduleId: "about/components/aboutLabel", nav: true, name: "label", title: "Label" },
            { route: "tab", moduleId: "about/components/aboutTab", nav: true, name: "tab", title: "Tab" }
            //un select con filtro
            //un cargador de imagenes 
            //un menu
            //una grilla
            //un menu
            //un tree
            //un label
            //unos taggs
			//un timer
        ];
        config.map(routes);
    }
}