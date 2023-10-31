import css from './Button.module.css';

export default function Button({ onClick }) {
  return (
    <button ocClick={onClick} type="button" className={css.Button}>
      Load more
    </button>
  );
}
