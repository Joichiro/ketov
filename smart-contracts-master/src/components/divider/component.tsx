import './styles.scss';

interface Props {
  withLine?: boolean;
}

export default function Divider(props: Props) {
  const cn = props.withLine ? 'divider divider--line' : 'divider';

  return (
    <div className={cn} hidden />
  );
}
