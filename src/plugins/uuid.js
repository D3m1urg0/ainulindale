let uuid = 0;

export default {
  install: function (app /*, options*/) {
    app.mixin({
      beforeCreate() {
        this.uuid = uuid.toString();
        uuid += 1;
      },
    });
  },
};
