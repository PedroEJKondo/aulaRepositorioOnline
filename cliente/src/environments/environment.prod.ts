export const server_config = {
  port: '3333',
  host: 'localhost'
};

export const environment = {
  production: true,
  app_url: 'http://' + server_config.host + ':' + server_config.port
};
