import { TypeOrmModule } from '@nestjs/typeorm';
import { AddressesModule } from 'src/modules/addresses.module';
import { AttendancesModule } from 'src/modules/attendances.module';
import { AttributeValuesModule } from 'src/modules/attribute-values.module';
import { AttributesModule } from 'src/modules/attributes.module';
import { AuthModule } from 'src/modules/auth.module';
import { CartsModule } from 'src/modules/carts.module';
import { CategoriesModule } from 'src/modules/categories.module';
import { CitiesModule } from 'src/modules/cities.module';
import { CompaniesModule } from 'src/modules/companies.module';
import { ConfigurationsModule } from 'src/modules/configurations.module';
import { CountriesModule } from 'src/modules/countries.module';
import { CurrenciesModule } from 'src/modules/currencies.module';
import { CustomersModule } from 'src/modules/customers.module';
import { DepartmentsModule } from 'src/modules/departments.module';
import { DesignationsModule } from 'src/modules/designations.module';
import { EmployeesModule } from 'src/modules/employees.module';
import { FinancialYearModule } from 'src/modules/financial-year.module';
import { HsnCodesModule } from 'src/modules/hsn-codes.module';
import { ImagesModule } from 'src/modules/images.module';
import { LanguagesModule } from 'src/modules/languages.module';
import { LeaveApprovalsModule } from 'src/modules/leave-approvals.module';
import { LeavesModule } from 'src/modules/leaves.module';
import { LoggersModule } from 'src/modules/loggers.module';
import { OrderDetailsModule } from 'src/modules/order-details.module';
import { OrdersModule } from 'src/modules/orders.module';
import { PaymentMethodsModule } from 'src/modules/payment-methods.module';
import { PaymentsModule } from 'src/modules/payments.module';
import { PermissionsModule } from 'src/modules/permissions.module';
import { PincodeModule } from 'src/modules/pincode.module';
import { ProductAttributesModule } from 'src/modules/product-attributes.module';
import { ProductCategoriesModule } from 'src/modules/product-categories.module';
import { ProductPricesModule } from 'src/modules/product-prices.module';
import { ProductPromotionsModule } from 'src/modules/product-promotions.module';
import { ProductStocksModule } from 'src/modules/product-stocks.module';
import { ProductTagsModule } from 'src/modules/product-tags.module';
import { ProductsModule } from 'src/modules/products.module';
import { PromotionsModule } from 'src/modules/promotions.module';
import { SalariesModule } from 'src/modules/salaries.module';
import { StatesModule } from 'src/modules/states.module';
import { StatusModule } from 'src/modules/status.module';
import { TagsModule } from 'src/modules/tags.module';
import { TaxRatesModule } from 'src/modules/tax-rates.module';
import { TranslationsModule } from 'src/modules/translations.module';
import { UsersModule } from 'src/modules/users.module';
import { VendorsModule } from 'src/modules/vendors.module';
import { typeOrmConfig } from './typeOrm.config';

export const ImportList = [
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
