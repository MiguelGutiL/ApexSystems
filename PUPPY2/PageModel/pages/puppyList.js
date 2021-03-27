import { Selector } from 'testcafe'
import { t } from 'testcafe'

class puppyList{
    constructor(){
        this.Menu = Selector ('#navlist li a')
        this.Notice = Selector("#notice")
        this.AdoptPuppyMenu = Selector('#navlist')
        this.NextPage = Selector ('a.next_page')
        this.PreviousPage = Selector('span.previous_page')
        this.ViewDetailsButton = Selector('div input[class="rounded_button"]')
        this.ViewDetailsButton2 = Selector('')
        this.puppy = Selector('div[class^=list_line]')
        this.PuppyName = Selector('.name')
        this.ViewP = Selector('.view')
        this.button = Selector('.button_to')

    }

    NextP = async() =>{
        await t.click(this.NextPage)
    }

    PreviousP = async() =>{
        await t.click(this.PreviousPage)
    }

    SelectPuppy = async(puppies) =>{
        await t
            .click(this.PuppyName.withText(puppies)
                .parent('.list_line_odd')
                .child('.view')
                .child('.button_to')
                .child('div')
                .child('input[class="rounded_button"]'))
        }

    SelectPuppy2 = async(puppies2) =>{
        await t
            .click(this.PuppyName.withText(puppies2)            
                .parent('.list_line_even')
                .child('.view')
                .child('.button_to')
                .child('div')
                .child('input[class="rounded_button"]'))
        }

}export default new puppyList();