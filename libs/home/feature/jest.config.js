module.exports = {
  name: 'home-feature',
  preset: '../../../jest.config.js',
  coverageDirectory: '../../../coverage/libs/home/feature',
  snapshotSerializers: [
    'jest-preset-angular/AngularSnapshotSerializer.js',
    'jest-preset-angular/HTMLCommentSerializer.js'
  ]
};
