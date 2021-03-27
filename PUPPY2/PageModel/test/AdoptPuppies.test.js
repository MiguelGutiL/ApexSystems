import CustomerDetails from '../pages/CustomerDetails'
import DetailsPuppy from '../pages/DetailsPuppy'
import puppyList from '../pages/puppyList'
import ShoppingCart from '../pages/ShoppingCart'
import { ConstantPuppy } from '../data/ConstantsPuppy.json'

fixture('Adopt puupy').page `http://puppies.herokuapp.com/`

//1
test('Adopt one Puppy', async t =>{
    await puppyList.SelectPuppy('Brook')
    await DetailsPuppy.AdoptPuppyB()
    await ShoppingCart.CompleteAdoption()
    await CustomerDetails.PaywithCheck()

    await t.expect(puppyList.Notice.exists).ok()
})

//2
test('Adopt two Puppies', async t =>{

    await puppyList.NextP()    
    await puppyList.SelectPuppy('Sparky')
    await DetailsPuppy.AdoptPuppyB()
    await ShoppingCart.AdoptAnother()

    await puppyList.NextP()
    await puppyList.SelectPuppy2('Spud')
    await DetailsPuppy.AdoptPuppyB()
    await ShoppingCart.CompleteAdoption()
    await CustomerDetails.PaywithCreditCard()

    await t.expect(puppyList.Notice.exists).ok()
})

//3
test('3 Puppies should appear on Cart Page', async t=>{

    await puppyList.SelectPuppy('Brook')
    await DetailsPuppy.AdoptPuppyB()
    await ShoppingCart.AdoptAnother()

    await puppyList.SelectPuppy2('Hanna')
    await DetailsPuppy.AdoptPuppyB()
    await ShoppingCart.AdoptAnother()
    
    await puppyList.SelectPuppy('Maggie Mae')
    await DetailsPuppy.AdoptPuppyB()

    await t.expect(ShoppingCart.NamePuppy.exists).ok()
})

//8
test('Cart details displayed correctly', async t=>{
    
    await puppyList.SelectPuppy('Magegie Ma')
    await DetailsPuppy.AdoptPuppyB()

    await t.expect(ShoppingCart.NamePuppy.exists).ok()
    await t.expect(ShoppingCart.BreedPyppy.exists).ok()
    await t.expect(ShoppingCart.TotalPrice.exists).ok()
})
