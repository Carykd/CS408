import { defineConfig } from 'vitepress'
import markdownItMathjax3 from 'markdown-it-mathjax3'

export default defineConfig({
  title: 'CS408 考研笔记',
  description: '计算机科学408考研复习资料整理',
  base: '/',
  
  // 主题配置
  themeConfig: {
    siteTitle: 'CS408 考研笔记',
    nav: [
      { text: '首页', link: '/' },
      { text: '数据结构', link: '/Data-Structrue/0-summary' },
      { text: '计算机网络', link: '/Computer-Network/0-summary' },
      { text: '计算机组成原理', link: '/Computer-Organization/0-summary' },
      { text: '操作系统', link: '/Operate-System/0-summary' },
      { text: '参考来源', link: '/references' }
    ],
    
    sidebar: {
      '/Data-Structrue/': [
        {
          text: '数据结构',
          items: [
            { text: '概述', link: '/Data-Structrue/0-summary' },
            { text: '线性表', link: '/Data-Structrue/1-linear-list' },
            { text: '栈', link: '/Data-Structrue/2-stack' },
            { text: '队列', link: '/Data-Structrue/3-queue' },
            { text: '数组', link: '/Data-Structrue/4-array' },
            { text: '串', link: '/Data-Structrue/5-string' },
            { text: '树', link: '/Data-Structrue/6-tree' },
            { text: '图', link: '/Data-Structrue/7-graph' },
            { text: '查找', link: '/Data-Structrue/8-search' },
            { text: '排序', link: '/Data-Structrue/9-sort' }
          ]
        }
      ],
      '/Computer-Network/': [
        {
          text: '计算机网络',
          items: [
            { text: '概述', link: '/Computer-Network/0-summary' },
            { text: '物理层', link: '/Computer-Network/1-physical-layer' },
            { text: '数据链路层', link: '/Computer-Network/2-data-link-layer' },
            { text: '网络层', link: '/Computer-Network/3-network-layer' },
            { text: '运输层', link: '/Computer-Network/4-transport-layer' },
            { text: '应用层', link: '/Computer-Network/5-application-layer' }
          ]
        }
      ],
      '/Computer-Organization/': [
        {
          text: '计算机组成原理',
          items: [
            { text: '概述', link: '/Computer-Organization/0-summary' },
            { text: '数据表示与运算', link: '/Computer-Organization/1-data-representation-and-operation' },
            { text: '存储系统', link: '/Computer-Organization/2-storage-system' },
            { text: '指令系统', link: '/Computer-Organization/3-instruction-system' },
            { text: '中央处理器', link: '/Computer-Organization/4-central-processing-unit' },
            { text: '总线', link: '/Computer-Organization/5-bus' },
            { text: '输入输出系统', link: '/Computer-Organization/6-input-output-system' },
            { text: '汇编语言', link: '/Computer-Organization/7-assembler' }
          ]
        }
      ],
      '/Operate-System/': [
        {
          text: '操作系统',
          items: [
            { text: '概述', link: '/Operate-System/0-summary' },
            { text: '进程管理', link: '/Operate-System/1-process-management' },
            { text: '内存管理', link: '/Operate-System/2-memory-management' },
            { text: '文件管理', link: '/Operate-System/3-file-management' },
            { text: '设备管理', link: '/Operate-System/4-device-management' }
          ]
        }
      ]
    },
    
    socialLinks: [
      { icon: 'github', link: 'https://github.com' }
    ],
    
    footer: {
      message: 'CS408 考研笔记整理',
    },
    
    search: {
      provider: 'local'
    }
  },
  
  markdown: {
    lineNumbers: true,
    config: (md) => {
      md.use(markdownItMathjax3)
    }
  },
  
  // Vue 编译器配置：将 MathJax 自定义元素标记为原生元素
  vue: {
    template: {
      compilerOptions: {
        isCustomElement: (tag) => tag.startsWith('mjx-')
      }
    }
  }
})
