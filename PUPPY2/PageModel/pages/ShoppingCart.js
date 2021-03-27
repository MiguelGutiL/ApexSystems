import { Selector } from 'testcafe'
import { t } from 'testcafe'

class ShoppingCart{
    constructor(){
        this.CompleteAdoptionButton = Selector('input[value="Complete the Adoption"]')
        this.AdoptAnotherPuppy = Selector('input[value="Adopt Another Puppy"]')
        this.Changeyourmind = Selector('input[value="Change your mind"]')
        this.ItemPrice = Selector('td.item_price h2')
        this.TotalPrice = Selector('td.total_cell h2')
        this.Alert = Selector('input[data-confirm="Are you sure?"]')
        this.NamePuppy = Selector('#content table tbody tr:nth-child(1) td:nth-child(2) h2')
        this.BreedPuppy = Selector('#content table tbody tr:nth-child(1) td:nth-child(3) h2')
    }

    CompleteAdoption = async() =>{
        await t.click(this.CompleteAdoptionButton)
    }

    AdoptAnother = async() =>{
        await t.click(this.AdoptAnotherPuppy)
    }

    ChangeMind = async() =>{
        await t.click(this.Changeyourmind)
    }
}export default new ShoppingCart();