module.exports = {
  name: 'angular-material',
  preset: '../../jest.config.js',
  coverageDirectory: '../../coverage/libs/angular-material',
  snapshotSerializers: [
    'jest-preset-angular/AngularSnapshotSerializer.js',
    'jest-preset-angular/HTMLCommentSerializer.js'
  ]
};
