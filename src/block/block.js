/**
 * BLOCK: wpmastery-code-block
 *
 * Registering a basic block with Gutenberg.
 * Simple block, renders and saves the same content without any interactivity.
 */

//  Import CSS.
import './style.scss';
import './editor.scss';

const { __ } = wp.i18n; // Import __() from wp.i18n
const { registerBlockType } = wp.blocks; // Import registerBlockType() from wp.blocks
const { RichText, PlainText } = wp.editor;
/**
 * Register: aa Gutenberg Block.
 *
 * Registers a new block provided a unique name and an object defining its
 * behavior. Once registered, the block is made editor as an option to any
 * editor interface where blocks are implemented.
 *
 * @link https://wordpress.org/gutenberg/handbook/block-api/
 * @param  {string}   name     Block name.
 * @param  {Object}   settings Block settings.
 * @return {?WPBlock}          The block, if it has been successfully
 *                             registered; otherwise `undefined`.
 */
registerBlockType( 'wpm/block-wpmastery-code-block', {
    // Block name. Block names must be string that contains a namespace prefix. Example: my-plugin/my-custom-block.
    title: __('wpmastery-code-block'), // Block title.
    icon: 'media-code', // Block icon from Dashicons → https://developer.wordpress.org/resource/dashicons/.
    category: 'common', // Block category — Group blocks together based on common traits E.g. common, formatting, layout widgets, embed.
    keywords: [
        __('wpmastery-code-block — CGB Block'),
        __('CGB Example'),
        __('create-guten-block'),
    ],
    attributes: {
        gist_url: {
            type: 'string',
            /*source: 'attributes',
            selector: 'a',
			attribute: 'href'*/
        }
    },
    /**
     * The edit function describes the structure of your block in the context of the editor.
     * This represents what the editor will render when the block is used.
     *
     * The "edit" property must be a valid function.
     *
     * @link https://wordpress.org/gutenberg/handbook/block-api/block-edit-save/
     */
    edit({className, attributes, setAttributes}) {
        return (
            <p>Gist URL to embed:
                <PlainText
                    className={className}
                    value={attributes.gist_url}
                    onChange={(gist_url) => setAttributes({gist_url})}
                />
            </p>
        );
    },
    /**
     * The save function defines the way in which the different attributes should be combined
     * into the final markup, which is then serialized by Gutenberg into post_content.
     *
     * The "save" property must be specified and must be a valid function.
     *
     * @link https://wordpress.org/gutenberg/handbook/block-api/block-edit-save/
     */
    save({className, attributes}) {
        //return <RichText.Content tagName="a" value={ attributes.gist_url } />;
		return <script test className={className} src={attributes.gist_url + ".js"}></script>;
    }
});