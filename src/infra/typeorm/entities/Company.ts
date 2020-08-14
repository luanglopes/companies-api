import { Entity, PrimaryGeneratedColumn, Column } from 'typeorm'

import { ICompany } from 'database/entities/ICompany'

@Entity({ name: 'companies' })
export class Company implements ICompany {
  @PrimaryGeneratedColumn()
  id: number

  @Column()
  name: string

  @Column({ name: 'fancy_name', nullable: true })
  fancyName?: string

  @Column()
  cnpj: string

  @Column({ name: 'opening_date', type: 'timestamp' })
  openingDate: Date
}
