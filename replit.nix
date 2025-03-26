{pkgs}: {
  deps = [
    pkgs.imagemagick_light
    pkgs.google-cloud-sdk
    pkgs.nodejs
    pkgs.nodePackages.typescript-language-server
    pkgs.postgresql
  ];
}
