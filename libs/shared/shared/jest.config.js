module.exports = {
  name: 'shared-shared',
  preset: '../../../jest.config.js',
  coverageDirectory: '../../../coverage/libs/shared/shared',
  snapshotSerializers: [
    'jest-preset-angular/AngularSnapshotSerializer.js',
    'jest-preset-angular/HTMLCommentSerializer.js'
  ]
};
