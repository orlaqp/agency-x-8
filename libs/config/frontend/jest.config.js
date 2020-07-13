module.exports = {
  name: 'config-frontend',
  preset: '../../../jest.config.js',
  coverageDirectory: '../../../coverage/libs/config/frontend',
  snapshotSerializers: [
    'jest-preset-angular/build/AngularNoNgAttributesSnapshotSerializer.js',
    'jest-preset-angular/build/AngularSnapshotSerializer.js',
    'jest-preset-angular/build/HTMLCommentSerializer.js',
  ],
};
