/*DEFAULT GENERATED TEMPLATE. DO NOT CHANGE SELECTOR TEMPLATE_URL AND CLASS NAME*/
import { Component, OnInit } from '@angular/core'
import { ModelMethods } from '../../lib/model.methods';
// import { BDataModelService } from '../service/bDataModel.service';
import { NDataModelService } from 'neutrinos-seed-services';
import { NBaseComponent } from '../../../../../app/baseClasses/nBase.component';

/**
 * Service import Example :
 * import { HeroService } from '../services/hero/hero.service';
 */

@Component({
    selector: 'bh-scan',
    templateUrl: './scan.template.html'
})

export class scanComponent extends NBaseComponent implements OnInit {
    mm: ModelMethods;

    receivedText : string;
    displayText: string;

    constructor(private bdms: NDataModelService) {
        super();
        this.mm = new ModelMethods(bdms);
    }

    ngOnInit() {
        
    }

    display(){
    //    this.displayText = this.get('scanned_text');
        console.log(this.displayText);
    }
    // saveText(text){

        
    // }

    //the action that occurs if the directive successfully completed its functionality.
    success($event) {
        //save text in data model
        this.displayText = $event;
        alert(this.displayText);        
        console.log($event);
        this.put('scanned_text', $event);
        
    }

    // the action that occurs if the directive failed to complete its functionality.
    error($event) {
        this.displayText = $event;
        alert(this.displayText);        
        console.log($event);
        this.put('scanned_text', $event);        
    }


    get(dataModelName, filter?, keys?, sort?, pagenumber?, pagesize?) {
        this.mm.get(dataModelName, this, filter, keys, sort, pagenumber, pagesize,
            result => {
                // On Success code here
                this.displayText = result;
                return this.displayText;
            },
            error => {
                // Handle errors here
            });
    }

    getById(dataModelName, dataModelId) {
        this.mm.getById(dataModelName, dataModelId,
            result => {
                // On Success code here
            },
            error => {
                // Handle errors here
            })
    }

    put(dataModelName, dataModelObject) {
        this.mm.put(dataModelName, dataModelObject,
            result => {
                // On Success code here
            }, error => {
                // Handle errors here
            })
    }

    validatePut(formObj, dataModelName, dataModelObject) {
        this.mm.validatePut(formObj, dataModelName, dataModelObject,
            result => {
                // On Success code here
            }, error => {
                // Handle errors here
            })
    }

    update(dataModelName, update, filter, options) {
        const updateObject = {
            update: update,
            filter: filter,
            options: options
        };
        this.mm.update(dataModelName, updateObject,
            result => {
                //  On Success code here
            }, error => {
                // Handle errors here
            })
    }

    delete (dataModelName, filter) {
        this.mm.delete(dataModelName, filter,
            result => {
                // On Success code here
            }, error => {
                // Handle errors here
            })
    }

    deleteById(dataModelName, dataModelId) {
        this.mm.deleteById(dataModelName, dataModelId,
            result => {
                // On Success code here
            }, error => {
                // Handle errors here
            })
    }

    updateById(dataModelName, dataModelId, dataModelObj) {
        this.mm.updateById(dataModelName, dataModelId, dataModelObj,
            result => {
                // On Success code here
            }, error => {
                // Handle errors here
            })
    }


}
