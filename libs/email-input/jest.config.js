module.exports = {
  name: 'email-input',
  preset: '../../jest.config.js',
  coverageDirectory: '../../coverage/libs/email-input',
  snapshotSerializers: [
    'jest-preset-angular/build/AngularNoNgAttributesSnapshotSerializer.js',
    'jest-preset-angular/build/AngularSnapshotSerializer.js',
    'jest-preset-angular/build/HTMLCommentSerializer.js',
  ],
};
