import type {Core} from '@strapi/strapi';
import Handlebars from 'handlebars';

const service = ({ strapi }: { strapi: Core.Strapi }) => ({
    async getEmailTemplate({ template, data}) {
        const emailTemplate = await strapi.query('plugin::email-templates.email-template').findOne({ where: { template } });
        if (!emailTemplate) {
            throw new Error(`Email template ${template} not found`);
        }

        const templateContent = Handlebars.compile(emailTemplate.content);
        const compliedTemplateContent = templateContent(data);

        const baseTemplate = await strapi.query('plugin::email-templates.base-email-template').findOne();
        const baseTemplateContent = Handlebars.compile(baseTemplate.content);

        return baseTemplateContent({ content: compliedTemplateContent });
    }
});

export default service;