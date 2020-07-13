module.exports = {
  name: 'angular-material',
  preset: '../../jest.config.js',
  coverageDirectory: '../../coverage/libs/angular-material',
  snapshotSerializers: [
    'jest-preset-angular/build/AngularNoNgAttributesSnapshotSerializer.js',
    'jest-preset-angular/build/AngularSnapshotSerializer.js',
    'jest-preset-angular/build/HTMLCommentSerializer.js',
  ],
};
