module.exports = {
  name: 'language-picker',
  preset: '../../jest.config.js',
  coverageDirectory: '../../coverage/libs/language-picker',
  snapshotSerializers: [
    'jest-preset-angular/AngularSnapshotSerializer.js',
    'jest-preset-angular/HTMLCommentSerializer.js'
  ]
};
