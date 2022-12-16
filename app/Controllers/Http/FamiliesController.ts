import type { HttpContextContract } from '@ioc:Adonis/Core/HttpContext'
import Family from '../../Models/Family'
import StoreFamilyValidator from '../../Validators/StoreFamilyValidator'

export default class FamiliesController {
    public async index({}: HttpContextContract) {
        const families = await Family.all()
        return families
    }

    //public async create({}: HttpContextContract) {}
  
    public async store({request}: HttpContextContract) {
        const data = await request.validate(StoreFamilyValidator)
        const family = await Family.create(data)

        return family
    }
  
    public async show({params}: HttpContextContract) {
        const family = await Family.findOrFail(params.id)

        return family

    }
  
    //public async edit({}: HttpContextContract) {}
  
    public async update({request, params}: HttpContextContract) {
        const family = await Family.findOrFail(params.id)

        const data = await request.validate(StoreFamilyValidator)

        await family.merge(data).save()

        return family
    }
  
    public async destroy({params}: HttpContextContract) {
        const family = await Family.findOrFail(params.id)

        await family.delete()

        return family

    }
  }
