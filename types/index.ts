export interface ICategory {
  id: number;
  attributes: ICategoryAttribute;
}

export interface ICategoryAttribute {
  Title: string;
  Slug: string;
}

export interface IPagination {
  page: number;
  pageSize: number;
  pageCount: number;
  total: number;
}

export interface IResourceMeta {
  pagination: IPagination;
}

export interface ICollectionResponse<T> {
  data: T;
  meta: IResourceMeta;
}

export interface IAuthor {
  data: {
    attributes: {
      firstname: string;
      lastname: string;
      avatar: {
        data: {
          attributes: {
            formats: {
              thumbnail: {
                url: string;
              };
            };
          };
        };
      };
    };
  };
}

export interface IArticleAttribute {
  Title: string;
  body: string;
  Slug: string;
  image: ImageData;
  createdAt: string;
  author: IAuthor;
}
export interface ImageData {
  data: {
    Attribute: {
      url: string;
      formate: {
        small: {
          url: string;
        };
      };
    };
  };
}
export interface IArticle {
  id: number;
  attributes: IArticleAttribute;
}
