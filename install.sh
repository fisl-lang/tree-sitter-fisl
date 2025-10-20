cat init.lua >> ~/.config/lvim/config.lua

cp_hghl()
{
    mkdir -p $1
    cp queries/highlights.scm $1
}

cp_hghl ~/.config/nvim/queries/fisl
cp_hghl ~/.local/share/nvim/queries/fisl

if [ -d ~/.local/share/lunarvim ]; then
    cp_hghl ~/.local/share/lunarvim/site/pack/lazy/opt/nvim-treesitter/queries/fisl/
fi
