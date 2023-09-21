import { TypeOrmModuleOptions } from '@nestjs/typeorm';
import { Address } from 'src/entities/address.entity';
import { Attendance } from 'src/entities/attendance.entity';
import { AttributeValue } from 'src/entities/attribute-value.entity';
import { Attribute } from 'src/entities/attribute.entity';
import { Cart } from 'src/entities/cart.entity';
import { Category } from 'src/entities/category.entity';
import { City } from 'src/entities/city.entity';
import { Company } from 'src/entities/company.entity';
import { Configuration } from 'src/entities/configuration.entity';
import { Country } from 'src/entities/country.entity';
import { Currency } from 'src/entities/currency.entity';
import { Customer } from 'src/entities/customer.entity';
import { Department } from 'src/entities/department.entity';
import { Designation } from 'src/entities/designation.entity';
import { Employee } from 'src/entities/employee.entity';
import { FinancialYear } from 'src/entities/financial-year.entity';
import { HsnCode } from 'src/entities/hsn-code.entity';
import { Language } from 'src/entities/language.entity';
import { LeaveApproval } from 'src/entities/leave-approval.entity';
import { Leave } from 'src/entities/leave.entity';
import { AuditLogger } from 'src/entities/logger.entity';
import { OrderDetail } from 'src/entities/order-detail.entity';
import { Order } from 'src/entities/order.entity';
import { PaymentMethod } from 'src/entities/payment-method.entity';
import { Payment } from 'src/entities/payment.entity';
import { Permission } from 'src/entities/permission.entity';
import { Pincode } from 'src/entities/pincode.entity';
import { ProductAttribute } from 'src/entities/product-attribute.entity';
import { ProductCategory } from 'src/entities/product-category.entity';
import { ProductPrice } from 'src/entities/product-price.entity';
import { ProductPromotion } from 'src/entities/product-promotion.entity';
import { ProductStock } from 'src/entities/product-stock.entity';
import { ProductTag } from 'src/entities/product-tag.entity';
import { Product } from 'src/entities/product.entity';
import { Promotion } from 'src/entities/promotion.entity';
import { Salary } from 'src/entities/salary.entity';
import { State } from 'src/entities/state.entity';
import { Status } from 'src/entities/status.entity';
import { Tag } from 'src/entities/tag.entity';
import { TaxRate } from 'src/entities/tax-rate.entity';
import { Translation } from 'src/entities/translation.entity';
import { User } from 'src/entities/user.entity';
import { Vendor } from 'src/entities/vendor.entity';
import { Image } from 'src/entities/image.entity';

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

export const typeOrmConfig: TypeOrmModuleOptions = {
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
};
