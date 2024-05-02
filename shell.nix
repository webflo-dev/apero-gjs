{pkgs ? import <nixpkgs> {}}: let
  lib = pkgs.lib;
  stdenv = pkgs.stdenv;
in
  pkgs.mkShell {
    name = "apero-gjs";

    packages = with pkgs; [
      gtk4-layer-shell
      gtk4
      gobject-introspection

      ### Build tools for GJS version
      meson
      ninja
      pkg-config
      cmake
      gjs
      libadwaita
      nodejs
      typescript
      esbuild
    ];

    LD_PRELOAD = "${pkgs.gtk4-layer-shell}/lib/libgtk4-layer-shell.so";
  }
