local null_ls = require("null-ls")
local lspconfig = require("lspconfig")
local opts = { noremap = true, silent = true }
local keymap = vim.keymap.set
local capabilities = require("cmp_nvim_lsp").default_capabilities()

null_ls.setup({
  sources = {
    null_ls.builtins.formatting.prettier,
  },
})

lspconfig.tsserver.setup({
  capabilities = capabilities,
  on_attach = on_attach,
})
