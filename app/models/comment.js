class Comment {
  #description;

  constructor(config) {
    this.description = config.description;
  }

  get description() {
    return this.#description;
  }

  set description(value) {
    if (!value || typeof value !== 'string') {
      throw new Error('Description obligatoire');
    }
    this.#description = value;
  }
}

export default Comment;
