module.exports = {
  name: 'email-input',
  preset: '../../jest.config.js',
  coverageDirectory: '../../coverage/libs/email-input',
  snapshotSerializers: [
    'jest-preset-angular/AngularSnapshotSerializer.js',
    'jest-preset-angular/HTMLCommentSerializer.js'
  ]
};
