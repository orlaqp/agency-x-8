module.exports = {
  name: 'config-frontend',
  preset: '../../../jest.config.js',
  coverageDirectory: '../../../coverage/libs/config/frontend',
  snapshotSerializers: [
    'jest-preset-angular/AngularSnapshotSerializer.js',
    'jest-preset-angular/HTMLCommentSerializer.js'
  ]
};
