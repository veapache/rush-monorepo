import {name, internet, vehicle, datatype} from 'faker'

export const users = [
    {
        name: name.findName(),
        password: internet.password(),
        email: internet.email()
    },
    {
        name: name.findName(),
        password: internet.password(),
        email: internet.email()
    }
]

export const vehicles = [
    {
        brand: vehicle.vehicle(),
        model: vehicle.model(),
        year: datatype.number({ 'min': 1885, 'max': undefined }),
        cost: datatype.number({ 'min': 0, 'max': undefined })
    },
    {
        brand: vehicle.vehicle(),
        model: vehicle.model(),
        year: datatype.number({ 'min': 1885, 'max': undefined }),
        cost: datatype.number({ 'min': 0, 'max': undefined })
    }
]