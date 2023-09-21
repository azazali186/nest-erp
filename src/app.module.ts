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
import { EmployeesModule } from './employees/Employees.module';
import { TaxRatesModule } from './tax-rates/tax-rates.module';
import { HsnCodesModule } from './hsn-codes/hsn-codes.module';
import { CountriesModule } from './countries/countries.module';
import { StatesModule } from './states/states.module';
import { DepartmentsModule } from './departments/departments.module';
import { AuthModule } from './auth/auth.module';
import { UsersModule } from './users/users.module';
import helmet from 'helmet';
import { TypeOrmModule } from '@nestjs/typeorm';
import { AttributeValuesModule } from './attribute-values/attribute-values.module';
import { CitiesModule } from './cities/cities.module';
import { TranslationsModule } from './translations/translations.module';
import { CompaniesModule } from './companies/companies.module';
import { DesignationsModule } from './designations/designations.module';
import { TagsModule } from './tags/tags.module';
import { PromotionsModule } from './promotions/promotions.module';
import { ProductPromotionsModule } from './product-promotions/product-promotions.module';
import { ProductTagsModule } from './product-tags/product-tags.module';
import { ProductStocksModule } from './product-stocks/product-stocks.module';
import { ProductPricesModule } from './product-prices/product-prices.module';
import { ProductCategoriesModule } from './product-categories/product-categories.module';
import { CategoriesModule } from './categories/categories.module';
import { OrderDetailsModule } from './order-details/order-details.module';
import { LoggersModule } from './loggers/loggers.module';
import { FinancialYearModule } from './financial-year/financial-year.module';
import { CurrenciesModule } from './currencies/currencies.module';
import { LanguagesModule } from './languages/languages.module';
import { ImagesModule } from './images/images.module';
import { ProductAttributesModule } from './product-attributes/product-attributes.module';
import { User } from './users/entities/user.entity';
import { Address } from './addresses/entities/address.entity';
import { Attendance } from './attendances/entities/attendance.entity';
import { AttributeValue } from './attribute-values/entities/attribute-value.entity';
import { Attribute } from './attributes/entities/attribute.entity';
import { Cart } from './carts/entities/cart.entity';
import { Category } from './categories/entities/category.entity';
import { City } from './cities/entities/city.entity';
import { Company } from './companies/entities/company.entity';
import { Configuration } from './configurations/entities/configuration.entity';
import { Country } from './countries/entities/country.entity';
import { Currency } from './currencies/entities/currency.entity';
import { Customer } from './customers/entities/customer.entity';
import { Department } from './departments/entities/department.entity';
import { Designation } from './designations/entities/designation.entity';
import { Employee } from './employees/entities/Employee.entity';
import { FinancialYear } from './financial-year/entities/financial-year.entity';
import { HsnCode } from './hsn-codes/entities/hsn-code.entity';
import { Image } from './images/entities/image.entity';
import { Language } from './languages/entities/language.entity';
import { LeaveApproval } from './leave-approvals/entities/leave-approval.entity';
import { Leave } from './leaves/entities/leave.entity';
import { AuditLogger } from './loggers/entities/logger.entity';
import { OrderDetail } from './order-details/entities/order-detail.entity';
import { PaymentMethod } from './payment-methods/entities/payment-method.entity';
import { Payment } from './payments/entities/payment.entity';
import { Permission } from './permissions/entities/permission.entity';
import { ProductAttribute } from './product-attributes/entities/product-attribute.entity';
import { ProductCategory } from './product-categories/entities/product-category.entity';
import { ProductPrice } from './product-prices/entities/product-price.entity';
import { ProductPromotion } from './product-promotions/entities/product-promotion.entity';
import { ProductStock } from './product-stocks/entities/product-stock.entity';
import { ProductTag } from './product-tags/entities/product-tag.entity';
import { Product } from './products/entities/product.entity';
import { Promotion } from './promotions/entities/promotion.entity';
import { Salary } from './salaries/entities/salary.entity';
import { State } from './states/entities/state.entity';
import { Status } from './status/entities/status.entity';
import { Tag } from './tags/entities/tag.entity';
import { TaxRate } from './tax-rates/entities/tax-rate.entity';
import { Translation } from './translations/entities/translation.entity';
import { Vendor } from './vendors/entities/vendor.entity';
import { PincodeModule } from './pincode/pincode.module';
import { Pincode } from './pincode/entities/pincode.entity';
import { Order } from './orders/entities/order.entity';
import { DataSource } from 'typeorm';
import { BullModule } from '@nestjs/bull';

const EntityList = [
  Address,
  Attendance,
  AttributeValue,
  Attribute,
  AuditLogger,
  Cart,
  Category,
  City,
  Company,
  Configuration,
  Country,
  Currency,
  Customer,
  Department,
  Designation,
  Employee,
  FinancialYear,
  HsnCode,
  Image,
  Language,
  LeaveApproval,
  Leave,
  Order,
  OrderDetail,
  PaymentMethod,
  Payment,
  Pincode,
  Permission,
  ProductAttribute,
  ProductCategory,
  ProductPrice,
  ProductPromotion,
  ProductStock,
  ProductTag,
  Product,
  Promotion,
  Salary,
  State,
  Status,
  Tag,
  TaxRate,
  Translation,
  User,
  Vendor,
];

const ImportList = [
  TypeOrmModule.forRoot({
    type: 'mysql',
    host: '127.0.0.1',
    port: 3306,
    username: 'root',
    password: 'Aj189628@',
    database: 'nest-erp',
    entities: EntityList,
    synchronize: true,
    autoLoadEntities: true,
    logging: true,
    logger: 'file',
  }),
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
