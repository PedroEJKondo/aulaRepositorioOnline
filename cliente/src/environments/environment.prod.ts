export const server_config = {
  port: '3333',
  host: '192.168.43.164'
};

export const environment = {
  production: true,
  app_url: 'http://' + server_config.host + ':' + server_config.port
};
