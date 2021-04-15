export interface Category {
    _id: string;
    description: string;
    name: string;
    parent_id: string;
    content: string;
    icon: string;
    group: string;
    
  }
  export interface NavCategory {
    childs: NavCategory[];
    parent: Category;
  }
  export interface User {
    username: string;
    password: string;
}