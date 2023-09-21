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
import { User } from './entities/user.entity';
import { Address } from './entities/address.entity';
import { Attendance } from './entities/attendance.entity';
import { AttributeValue } from './entities/attribute-value.entity';
import { Attribute } from './entities/attribute.entity';
import { Cart } from './entities/cart.entity';
import { Category } from './entities/category.entity';
import { City } from './entities/city.entity';
import { Company } from './entities/company.entity';
import { Configuration } from './entities/configuration.entity';
import { Country } from './entities/country.entity';
import { Currency } from './entities/currency.entity';
import { Customer } from './entities/customer.entity';
import { Department } from './entities/department.entity';
import { Designation } from './entities/designation.entity';
import { Employee } from './entities/employee.entity';
import { FinancialYear } from './entities/financial-year.entity';
import { HsnCode } from './entities/hsn-code.entity';
import { Image } from './entities/image.entity';
import { Language } from './entities/language.entity';
import { LeaveApproval } from './entities/leave-approval.entity';
import { Leave } from './entities/leave.entity';
import { AuditLogger } from './entities/logger.entity';
import { OrderDetail } from './entities/order-detail.entity';
import { PaymentMethod } from './entities/payment-method.entity';
import { Payment } from './entities/payment.entity';
import { Permission } from './entities/permission.entity';
import { ProductAttribute } from './entities/product-attribute.entity';
import { ProductCategory } from './entities/product-category.entity';
import { ProductPrice } from './entities/product-price.entity';
import { ProductPromotion } from './entities/product-promotion.entity';
import { ProductStock } from './entities/product-stock.entity';
import { ProductTag } from './entities/product-tag.entity';
import { Product } from './entities/product.entity';
import { Promotion } from './entities/promotion.entity';
import { Salary } from './entities/salary.entity';
import { State } from './entities/state.entity';
import { Status } from './entities/status.entity';
import { Tag } from './entities/tag.entity';
import { TaxRate } from './entities/tax-rate.entity';
import { Translation } from './entities/translation.entity';
import { Vendor } from './entities/vendor.entity';
import { PincodeModule } from './modules/pincode.module';
import { Pincode } from './entities/pincode.entity';
import { Order } from './entities/order.entity';
import { DataSource } from 'typeorm';

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
