import { blogPost } from './blog'
import { project } from './project'
import { service } from './service'
import { testimonial } from './testimonial'
import { teamMember } from './teamMember'
import { faq } from './faq'
import { companyLogo } from './companyLogo'

export const schema = {
  types: [blogPost, project, service, testimonial, teamMember, faq, companyLogo],
}
