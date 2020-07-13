module.exports = {
  name: 'language-picker',
  preset: '../../jest.config.js',
  coverageDirectory: '../../coverage/libs/language-picker',
  snapshotSerializers: [
    'jest-preset-angular/build/AngularNoNgAttributesSnapshotSerializer.js',
    'jest-preset-angular/build/AngularSnapshotSerializer.js',
    'jest-preset-angular/build/HTMLCommentSerializer.js',
  ],
};
