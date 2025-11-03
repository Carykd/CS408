<script setup>
import DefaultTheme from 'vitepress/theme'

const { Layout } = DefaultTheme
</script>

<template>
  <Layout>
    <template #doc-footer-before>
    </template>
  </Layout>
</template>

<style scoped>
.doc-footer-reference {
  margin-top: 32px;
  padding-top: 16px;
}

.doc-footer-reference hr {
  margin-bottom: 16px;
  border: none;
  border-top: 1px solid var(--vp-c-divider);
}

.doc-footer-reference a {
  color: var(--vp-c-brand);
  text-decoration: none;
}

.doc-footer-reference a:hover {
  text-decoration: underline;
}
</style>
