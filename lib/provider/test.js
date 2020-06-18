"use strict";
// import { Content, CoreConstants, ProductMeta } from '..';
// import { ContentGroup } from './contentgroup';
// export type ContentProviderFactoryFunction = (productId: string) => Content;
// /**
//  * base class for content provider
//  * 
//  * @export
//  * @class ContentProvider
//  * @extends {ContentProvider}
//  */
// export class ContentProvider {
//   private static _contentProviders: Map<CoreConstants.CategoryTypes, ContentProviderFactoryFunction> = new Map();
//   public static registerContentProvider(productType: CoreConstants.CategoryTypes, factory: ContentProviderFactoryFunction) {
//     this._contentProviders.set(productType, factory);
//   }
//   public static create(meta: ProductMeta) {
//     const ctype = meta.categoryType;
//     const factory = this._contentProviders.get(ctype);
//     if (factory) {
//       return factory(meta.productId);
//     } else if (meta.getAttribute(CoreConstants.ProductAttributes.Contents)) {
//       return new ContentGroup({ productId: meta.productId });
//     }
//     return new Content({ productId: meta.productId });
//   }
// }
