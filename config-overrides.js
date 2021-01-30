module.exports = function override(config, env) {
  // New config, e.g. config.plugins.push...
  config.node.fs = 'empty';
  config.externals.push({ './cptable': 'var cptable' });
  config.externals.push({ './jszip': 'jszip' });
  return config;
};
