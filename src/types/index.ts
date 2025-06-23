// 全局类型定义

export interface TodoItem {
  id?: string;
  text: string;
  completed?: boolean;
  createdAt?: Date;
}

export interface User {
  id: string;
  name: string;
  email: string;
}

export interface PageMeta {
  title: string;
  description?: string;
  keywords?: string[];
}

// 组件 Props 类型
export interface ComponentProps {
  className?: string;
  style?: Record<string, any>;
}

// API 响应类型
export interface ApiResponse<T = any> {
  success: boolean;
  data?: T;
  message?: string;
  error?: string;
}
