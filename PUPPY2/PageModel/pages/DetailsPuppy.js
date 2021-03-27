import { Selector } from 'testcafe'
import { t } from 'testcafe'

class DetailsPuppy{
    constructor(){
        this.AdoptButton = Selector('input[class="rounded_button"]')
        this.Returnpage = Selector('#content a')
    }

    AdoptPuppyB = async() =>{
        await t.click(this.AdoptButton)
    }

}export default new DetailsPuppy();