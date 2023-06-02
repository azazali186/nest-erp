/* eslint-disable prettier/prettier */
import { MiddlewareConsumer, Module, NestModule } from '@nestjs/common';
import { ProductsModule } from './products/products.module';
import { OrdersModule } from './orders/orders.module';
import { CartsModule } from './carts/carts.module';
import { VendorsModule } from './vendors/vendors.module';
import { CustomersModule } from './customers/customers.module';
import { PermissionsModule } from './permissions/permissions.module';
import { AddressesModule } from './addresses/addresses.module';
import { StatusModule } from './status/status.module';
import { AttributesModule } from './attributes/attributes.module';
import { PaymentMethodsModule } from './payment-methods/payment-methods.module';
import { PaymentsModule } from './payments/payments.module';
import { ConfigurationsModule } from './configurations/configurations.module';
import { AttendancesModule } from './attendances/attendances.module';
import { LeavesModule } from './leaves/leaves.module';
import { LeaveApprovalsModule } from './leave-approvals/leave-approvals.module';
import { SalariesModule } from './salaries/salaries.module';
import { EmaployeesModule } from './emaployees/emaployees.module';
import { ReportsModule } from './reports/reports.module';
import { TaxRatesModule } from './tax-rates/tax-rates.module';
import { HsnCodesModule } from './hsn-codes/hsn-codes.module';
import { CountriesModule } from './countries/countries.module';
import { StatesModule } from './states/states.module';
import { LoggerMiddleware } from './logger.middleware';
import { DepartmentsModule } from './departments/departments.module';
import { AuthModule } from './auth/auth.module';
import { UsersModule } from './users/users.module';
import helmet from 'helmet'
import { TypeOrmModule } from '@nestjs/typeorm';
import { AttributeValuesModule } from './attribute-values/attribute-values.module';
import { CitiesModule } from './cities/cities.module';
import { TranslationsModule } from './translations/translations.module';
import { CompaniesModule } from './companies/companies.module';
import { DesignationsModule } from './designations/designations.module';
import { ImagesModule } from './images/images.module';
import { OrderDetailsModule } from './order-details/order-details.module';
import { LoggersModule } from './loggers/loggers.module';
import { FinancialYearModule } from './financial-year/financial-year.module';
import { CurrenciesModule } from './currencies/currencies.module';
import { LanguagesModule } from './languages/languages.module';
import { ImagesModule } from './images/images.module';

@Module({
  imports: [ TypeOrmModule.forRoot({
    type: 'mysql',
    host: 'localhost',
    username: 'root',
    password: null,
    database: 'nest-microservices',
    entities: [
      'Users',
    ],
    autoLoadEntities: true,
    // entities: ['./**/entities/*.ts'],

    synchronize: true,
  }),ProductsModule, OrdersModule, CartsModule, VendorsModule, CustomersModule, PermissionsModule, AddressesModule, StatusModule, AttributesModule, PaymentMethodsModule, PaymentsModule, ConfigurationsModule, AttendancesModule, LeavesModule, LeaveApprovalsModule, SalariesModule, EmaployeesModule, ReportsModule, TaxRatesModule, HsnCodesModule, CountriesModule, StatesModule, DepartmentsModule, AuthModule, UsersModule, AttributeValuesModule, CitiesModule, TranslationsModule, CompaniesModule, DesignationsModule, ImagesModule, LanguagesModule, CurrenciesModule, FinancialYearModule, LoggersModule, OrderDetailsModule],
  controllers: [],
  providers: [],
})

export class AppModule implements NestModule {
  configure(consumer: MiddlewareConsumer) {
    consumer
      .apply(helmet({
        crossOriginEmbedderPolicy: false,
        contentSecurityPolicy: {
          directives: {
            imgSrc: [`'self'`, 'data:', 'apollo-server-landing-page.cdn.apollographql.com'],
            scriptSrc: [`'self'`, `https: 'unsafe-inline'`],
            manifestSrc: [`'self'`, 'apollo-server-landing-page.cdn.apollographql.com'],
            frameSrc: [`'self'`, 'sandbox.embed.apollographql.com'],
          },
        },
      }), LoggerMiddleware)
      .forRoutes(ProductsModule, OrdersModule, CartsModule, VendorsModule, CustomersModule, PermissionsModule, AddressesModule, StatusModule, AttributesModule, PaymentMethodsModule, PaymentsModule, ConfigurationsModule, AttendancesModule, LeavesModule, LeaveApprovalsModule, SalariesModule, EmaployeesModule, ReportsModule, TaxRatesModule, HsnCodesModule, CountriesModule, StatesModule, DepartmentsModule);
  }
}
