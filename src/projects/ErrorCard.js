export default function ErrorCard({ message }) {
    return (message ? (
        <div className="row">
            <div className="card large error">
                <section>
                    <p>
                        <span className="icon-alert inverse "></span>
                        {message}
                    </p>
                </section>
            </div>
        </div>
    ) : null);
}