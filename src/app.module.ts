import { MiddlewareConsumer, Module, NestModule } from '@nestjs/common';
import { ProductsModule } from './modules/products.module';
import { OrdersModule } from './modules/orders.module';
import { CartsModule } from './modules/carts.module';
import { VendorsModule } from './modules/vendors.module';
import { CustomersModule } from './modules/customers.module';
import { PermissionsModule } from './modules/permissions.module';
import { AddressesModule } from './modules/addresses.module';
import { StatusModule } from './modules/status.module';
import { AttributesModule } from './modules/attributes.module';
import { PaymentMethodsModule } from './modules/payment-methods.module';
import { PaymentsModule } from './modules/payments.module';
import { ConfigurationsModule } from './modules/configurations.module';
import { AttendancesModule } from './modules/attendances.module';
import { LeavesModule } from './modules/leaves.module';
import { LeaveApprovalsModule } from './modules/leave-approvals.module';
import { SalariesModule } from './modules/salaries.module';
import { EmployeesModule } from './modules/employees.module';
import { TaxRatesModule } from './modules/tax-rates.module';
import { HsnCodesModule } from './modules/hsn-codes.module';
import { CountriesModule } from './modules/countries.module';
import { StatesModule } from './modules/states.module';
import { DepartmentsModule } from './modules/departments.module';
import { AuthModule } from './modules/auth.module';
import { UsersModule } from './modules/users.module';
import helmet from 'helmet';
import { TypeOrmModule } from '@nestjs/typeorm';
import { AttributeValuesModule } from './modules/attribute-values.module';
import { CitiesModule } from './modules/cities.module';
import { TranslationsModule } from './modules/translations.module';
import { CompaniesModule } from './modules/companies.module';
import { DesignationsModule } from './modules/designations.module';
import { TagsModule } from './modules/tags.module';
import { PromotionsModule } from './modules/promotions.module';
import { ProductPromotionsModule } from './modules/product-promotions.module';
import { ProductTagsModule } from './modules/product-tags.module';
import { ProductStocksModule } from './modules/product-stocks.module';
import { ProductPricesModule } from './modules/product-prices.module';
import { ProductCategoriesModule } from './modules/product-categories.module';
import { CategoriesModule } from './modules/categories.module';
import { OrderDetailsModule } from './modules/order-details.module';
import { LoggersModule } from './modules/loggers.module';
import { FinancialYearModule } from './modules/financial-year.module';
import { CurrenciesModule } from './modules/currencies.module';
import { LanguagesModule } from './modules/languages.module';
import { ImagesModule } from './modules/images.module';
import { ProductAttributesModule } from './modules/product-attributes.module';
import { PincodeModule } from './modules/pincode.module';
import { DataSource } from 'typeorm';
import { typeOrmConfig } from './config/typeOrm.config';

const ImportList = [
  TypeOrmModule.forRoot(typeOrmConfig),
  AddressesModule,
  AttendancesModule,
  AttributeValuesModule,
  AttributesModule,
  AuthModule,
  CartsModule,
  CategoriesModule,
  CitiesModule,
  CompaniesModule,
  ConfigurationsModule,
  CountriesModule,
  CurrenciesModule,
  CustomersModule,
  DepartmentsModule,
  DesignationsModule,
  EmployeesModule,
  FinancialYearModule,
  HsnCodesModule,
  ImagesModule,
  LanguagesModule,
  LeaveApprovalsModule,
  LeavesModule,
  LoggersModule,
  OrdersModule,
  OrderDetailsModule,
  PaymentMethodsModule,
  PaymentsModule,
  PincodeModule,
  PermissionsModule,
  ProductAttributesModule,
  ProductCategoriesModule,
  ProductPricesModule,
  ProductPromotionsModule,
  ProductStocksModule,
  ProductTagsModule,
  ProductsModule,
  PromotionsModule,
  SalariesModule,
  StatesModule,
  StatusModule,
  TagsModule,
  TaxRatesModule,
  TranslationsModule,
  UsersModule,
  VendorsModule,
];

@Module({
  imports: ImportList,
  controllers: [],
  providers: [],
})
export class AppModule implements NestModule {
  constructor(private dataSource: DataSource) {}
  configure(consumer: MiddlewareConsumer) {
    consumer
      .apply(
        helmet({
          crossOriginEmbedderPolicy: false,
          contentSecurityPolicy: {
            directives: {
              imgSrc: [
                `'self'`,
                'data:',
                'apollo-server-landing-page.cdn.apollographql.com',
              ],
              scriptSrc: [`'self'`, `https: 'unsafe-inline'`],
              manifestSrc: [
                `'self'`,
                'apollo-server-landing-page.cdn.apollographql.com',
              ],
              frameSrc: [`'self'`, 'sandbox.embed.apollographql.com'],
            },
          },
        }),
      )
      .forRoutes(
        AddressesModule,
        AttendancesModule,
        AttributeValuesModule,
        AttributesModule,
        AuthModule,
        CartsModule,
        CategoriesModule,
        CitiesModule,
        CompaniesModule,
        ConfigurationsModule,
        CountriesModule,
        CurrenciesModule,
        CustomersModule,
        DepartmentsModule,
        DesignationsModule,
        EmployeesModule,
        FinancialYearModule,
        HsnCodesModule,
        ImagesModule,
        LanguagesModule,
        LeaveApprovalsModule,
        LeavesModule,
        LoggersModule,
        OrdersModule,
        OrderDetailsModule,
        PaymentMethodsModule,
        PaymentsModule,
        PincodeModule,
        PermissionsModule,
        ProductAttributesModule,
        ProductCategoriesModule,
        ProductPricesModule,
        ProductPromotionsModule,
        ProductStocksModule,
        ProductTagsModule,
        ProductsModule,
        PromotionsModule,
        SalariesModule,
        StatesModule,
        StatusModule,
        TagsModule,
        TaxRatesModule,
        TranslationsModule,
        UsersModule,
        VendorsModule,
      );
  }
}
